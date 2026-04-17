import React, { useState } from 'react';
import { X, UploadCloud, FileImage, ShieldCheck, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { saveScan, ScanResult } from '../../lib/scanStore';
interface NewScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewScanModal({ isOpen, onClose }: NewScanModalProps) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setResult(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      // Random mock result
      const outcomes = [
        { text: 'Tree is Healthy 🌿', type: 'healthy' as const },
        { text: 'Vegetation Warning ⚠️', type: 'warning' as const },
        { text: 'Faulty Power Line 🚨', type: 'danger' as const },
        { text: 'Power Line is Safe ⚡', type: 'healthy' as const },
      ];
      const selected = outcomes[Math.floor(Math.random() * outcomes.length)];
      const confidenceScore = `${Math.floor(Math.random() * 15 + 85)}.${Math.floor(Math.random() * 99)}%`;
      
      const newScanDetails = {
        fileName: file.name,
        fileSize: file.size,
        resultType: selected.type,
        resultText: selected.text,
        confidence: confidenceScore,
      };
      
      // Persist the scan
      const savedResource = saveScan(newScanDetails);
      
      setResult(savedResource);
    }, 2500);
  };

  const resetState = () => {
    setFile(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="bg-surface relative w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/10">
          <div>
            <h2 className="text-xl font-display font-bold text-on-surface">Initiate New Scan</h2>
            <p className="text-sm text-on-surface-variant mt-1">Upload infrastructure or vegetation imagery for AI analysis</p>
          </div>
          <button 
            onClick={() => {
              resetState();
              onClose();
            }}
            className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex-1 max-h-[70vh] overflow-y-auto">
          {!file ? (
            <div 
              className={cn(
                "border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all bg-surface-container-lowest",
                dragActive ? "border-primary bg-primary/5" : "border-outline-variant/30 hover:border-outline-variant"
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
                <UploadCloud className="w-8 h-8 text-on-surface-variant" />
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Drag & Drop Imagery</h3>
              <p className="text-sm text-on-surface-variant mb-6 max-w-md">
                Upload clear visual data of power infrastructure and surrounding vegetation for CNN detection.
              </p>
              
              <label htmlFor="file-upload" className="cursor-pointer bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md">
                Browse Files
              </label>
              <input id="file-upload" type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleChange} />
              <p className="text-xs text-on-surface-variant/60 mt-4 font-mono">JPG, PNG (Max 10MB)</p>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 aspect-video flex items-center justify-center">
                <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover opacity-60" />
                
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center backdrop-blur-md">
                    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                    <p className="font-bold text-white tracking-widest text-sm animate-pulse">ANALYZING USING CNN...</p>
                  </div>
                )}
                
                {result && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                    {result.type === 'danger' ? (
                      <AlertTriangle className="w-16 h-16 text-error mb-4" />
                    ) : result.type === 'warning' ? (
                      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
                    ) : (
                      <ShieldCheck className="w-16 h-16 text-primary mb-4" />
                  )}
                  
                  <h3 className={cn(
                    "text-2xl font-bold mb-2",
                    result.resultType === 'danger' ? "text-error" : 
                    result.resultType === 'warning' ? "text-yellow-400" : "text-primary"
                  )}>
                    {result.resultText}
                  </h3>
                  <p className="text-white/80 font-mono text-sm max-w-sm">
                    Model Confidence: {result.confidence}
                  </p>
                </div>
              )}
              </div>
              
              {!isAnalyzing && !result && (
                <div className="flex items-center gap-4 w-full bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                  <FileImage className="w-8 h-8 text-primary" />
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-bold text-on-surface truncate">{file.name}</p>
                    <p className="text-xs text-on-surface-variant font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button onClick={resetState} className="text-xs font-bold text-error hover:text-error/80 px-3 py-1 rounded-md bg-error/10">
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-outline-variant/10 flex items-center justify-end gap-3 bg-surface-container-lowest">
          <button 
            onClick={() => {
              resetState();
              onClose();
            }}
            className="px-5 py-2.5 text-sm font-bold text-on-surface hover:text-primary transition-colors"
          >
            {result ? 'Close' : 'Cancel'}
          </button>
          
          {file && !result && !isAnalyzing && (
            <button 
              onClick={handleAnalyze}
              className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-sm font-bold rounded-lg shadow-md transition-colors"
            >
              Run AI Analysis
            </button>
          )}
          
          {result && (
            <button 
              onClick={resetState}
              className="px-6 py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-bold rounded-lg transition-colors border border-outline-variant/20"
            >
              Scan Another Asset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
