import React, { useState } from 'react';
import { UploadCloud, FileImage, ShieldCheck, AlertTriangle, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import { saveScan } from '../lib/scanStore';

export default function ScanAnalysisPage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<{
    prediction: string;
    confidence: number;
    statusColor: string;
  } | null>(null);

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
    setErrorMsg(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(uploadedFile.type)) {
      setErrorMsg("Invalid file type. Please upload a JPG or PNG.");
      return;
    }
    setFile(uploadedFile);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      setErrorMsg("Please upload an image first.");
      return;
    }
    
    setIsAnalyzing(true);
    setResult(null);
    setErrorMsg(null);
    
    try {
      const formData = new FormData();
      formData.append('image', file);

      // Call the backend API
      const response = await fetch('http://localhost:5001/api/scan', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Analysis failed on the server');
      }

      const data = await response.json();
      
      let statusColor = "green";
      let resultType: 'danger' | 'warning' | 'healthy' = 'healthy';
      
      if (data.prediction === "Tree has disease" || data.prediction === "Power line anomaly detected") {
        statusColor = "red";
        resultType = 'danger';
      }

      setResult({
        prediction: data.prediction,
        confidence: data.confidence,
        statusColor: statusColor
      });

      // Persist the scan locally
      saveScan({
        fileName: file.name,
        fileSize: file.size,
        resultType: resultType,
        resultText: data.prediction,
        confidence: `${data.confidence.toFixed(1)}%`,
      });

    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred during analysis.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetState = () => {
    setFile(null);
    setResult(null);
    setIsAnalyzing(false);
    setErrorMsg(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-on-surface-variant block mb-2">
          SCAN WORKFLOW
        </span>
        <h1 className="text-4xl font-display font-extrabold text-on-surface">Upload Image for AI Analysis</h1>
      </header>

      <div className="bg-surface-container-lowest p-8 rounded-xxl shadow-sm border border-outline-variant/10">
        {!file ? (
          <div 
            className={cn(
              "border-2 border-dashed rounded-xl p-16 flex flex-col items-center justify-center text-center transition-all bg-surface-container-low/50",
              dragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-outline-variant/30 hover:border-outline-variant"
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-6 shadow-inner">
              <UploadCloud className="w-10 h-10 text-on-surface-variant" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Drag & Drop Imagery</h3>
            <p className="text-sm text-on-surface-variant mb-8 max-w-md">
              Upload clear visual data of power infrastructure and surrounding vegetation for CNN detection.
            </p>
            
            <label htmlFor="file-upload" className="cursor-pointer bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-xl font-bold text-sm transition-transform hover:scale-105 shadow-lg">
              Browse File
            </label>
            <input id="file-upload" type="file" accept="image/png, image/jpeg, image/jpg" className="hidden" onChange={handleChange} />
            <p className="text-xs text-on-surface-variant/60 mt-4 font-mono">Accepts: JPG, PNG, JPEG</p>
            
            {errorMsg && (
              <div className="mt-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {errorMsg}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div className="w-full relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 aspect-square md:aspect-video flex items-center justify-center shadow-inner group">
                <img src={URL.createObjectURL(file)} alt="Preview" className={cn("w-full h-full object-cover transition-all", isAnalyzing ? "opacity-30 blur-sm scale-105" : "opacity-90")} />
                
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center backdrop-blur-md z-10">
                    <RefreshCw className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="font-bold text-white tracking-widest text-sm animate-pulse bg-black/50 px-4 py-2 rounded-full">Scanning with AI...</p>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4 w-full bg-surface-container-low p-5 rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileImage className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-on-surface truncate">{file.name}</p>
                  <p className="text-xs text-on-surface-variant font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button onClick={resetState} disabled={isAnalyzing} className="text-xs font-bold text-error hover:text-error/80 px-4 py-2 rounded-lg bg-error/10 hover:bg-error/20 transition-colors disabled:opacity-50">
                  Remove
                </button>
              </div>
              
              {errorMsg && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-sm font-bold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {errorMsg}
                </div>
              )}
            </div>

            <div className="w-full md:w-80 flex flex-col gap-6">
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col h-full">
                <h3 className="font-display font-bold text-lg mb-4">Analysis Controls</h3>
                <p className="text-sm text-on-surface-variant mb-8 flex-1">
                  Our trained CNN model will analyze the image to detect anomalies such as diseased trees or faulty infrastructure.
                </p>
                
                {!result && !isAnalyzing && (
                  <button 
                    onClick={handleAnalyze}
                    className="w-full py-4 bg-primary hover:bg-primary-container text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Start Scan
                  </button>
                )}
                
                {isAnalyzing && (
                  <button disabled className="w-full py-4 bg-surface-container-high text-on-surface-variant font-bold rounded-xl cursor-not-allowed border border-outline-variant/20 flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing...
                  </button>
                )}
                
                {result && (
                  <button 
                    onClick={resetState}
                    className="w-full py-4 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold rounded-xl transition-colors border border-outline-variant/20"
                  >
                    Scan Another Image
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-display font-bold mb-6">Scan Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cn(
              "p-8 rounded-xxl shadow-sm border-2 flex flex-col justify-center items-center text-center",
              result.statusColor === 'red' ? "bg-red-50 border-red-200" : "bg-emerald-50 border-emerald-200"
            )}>
              {result.statusColor === 'red' ? (
                <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
              ) : (
                <ShieldCheck className="w-16 h-16 text-emerald-500 mb-4" />
              )}
              <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-on-surface-variant mb-2">PREDICTED CLASS</div>
              <h3 className={cn(
                "text-3xl font-display font-bold",
                result.statusColor === 'red' ? "text-red-700" : "text-emerald-700"
              )}>
                {result.prediction}
              </h3>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-xxl shadow-sm border border-outline-variant/10 flex flex-col justify-center">
              <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-on-surface-variant mb-4">MODEL CONFIDENCE</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display font-extrabold">{result.confidence.toFixed(1)}%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full transition-all duration-1000", result.statusColor === 'red' ? "bg-red-500" : "bg-emerald-500")}
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-4">
                The CNN model is highly confident in this classification based on learned features from the training dataset.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
