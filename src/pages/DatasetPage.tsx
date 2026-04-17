import React from 'react';
import { Database, Image as ImageIcon, Cpu, PlayCircle, Activity, Focus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function DatasetPage() {
  const filePaths = {
    normalTree: '/assets/images/normal_tree.png',
    diseasedTree: '/assets/images/diseased_tree.png',
    normalPower: '/assets/images/healthy_infrastructure.png',
    faultyPower: '/assets/images/faulty_power_line.png'
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen text-gray-800 font-sans pb-20">
      <div className="max-w-[1400px] mx-auto px-16 pt-16">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#0f5c8c] text-xs font-bold tracking-widest uppercase rounded">
              Inventory Architecture
            </span>
            <h1 className="text-5xl font-extrabold text-[#0f2e1f] tracking-tight font-display">
              Data Insights
            </h1>
          </div>
          <div className="max-w-md pt-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              A multi-spectral archive of high-resolution industrial imagery
              calibrated for neural network synthesis and environmental monitoring.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {/* Card 1 */}
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-6 bg-gray-100 relative">
              <img src={filePaths.normalTree} alt="Normal Tree" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Classification Alpha</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0f2e1f] font-display">Normal Tree</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 relative group">
            <div className="absolute top-10 right-10 z-10 px-3 py-1.5 bg-[#fcd5ce] text-[#c9184a] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
              Anomaly Target
            </div>
            <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-6 bg-[#93a388] relative">
              <img src={filePaths.diseasedTree} alt="Diseased Tree" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Classification Beta</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0f2e1f] font-display">Diseased Tree</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-6 bg-gray-100 relative">
              <img src={filePaths.normalPower} alt="Normal Power Line" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Infrastructure A</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0f2e1f] font-display">Healthy Infrastructure</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 relative group">
            <div className="absolute top-10 right-10 z-10 px-3 py-1.5 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
              Critical Alert
            </div>
            <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-6 bg-blue-50 relative">
              <img src={filePaths.faultyPower} alt="Faulty Power Line" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Infrastructure B</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0f2e1f] font-display">Faulty Power Line</h3>
          </div>
        </div>

        {/* Neural Processing Pipeline */}
        <div className="mb-32">
          <div className="text-center mb-24">
            <h2 className="text-[40px] font-extrabold text-[#0f2e1f] font-display inline-block relative">
              Neural Processing Pipeline
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#096b42] rounded-full"></div>
            </h2>
          </div>

          <div className="relative">
            {/* The Connecting Line */}
            <div className="absolute top-[40px] left-12 right-12 h-[1px] bg-gray-200 -z-10"></div>
            
            <div className="flex justify-between items-start text-center">
              {[
                { icon: Database, title: "Dataset Collection" },
                { icon: ImageIcon, title: "Data Preprocessing" },
                { icon: Cpu, title: "CNN Model" },
                { icon: PlayCircle, title: "Training Phase" },
                { icon: Activity, title: "Evaluation" },
                { icon: Focus, title: "Prediction" },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center max-w-[160px]">
                  <div className="w-20 h-20 rounded-full bg-[#e8edeb] flex items-center justify-center mb-6 border-4 border-[#f8f9fa] shadow-sm relative text-[#0f2e1f]">
                    {idx === 0 || idx === 5 ? (
                      <div className="w-full h-full bg-[#0f2e1f] text-white rounded-full flex items-center justify-center shadow-lg">
                        <step.icon className="w-8 h-8" />
                      </div>
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-3">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Synthesis Summary */}
        <div className="bg-white rounded-[40px] p-16 shadow-sm border border-gray-100 flex items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-extrabold text-[#0f2e1f] font-display">AI Synthesis Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              The "ArborDetect" algorithm achieves a verified <span className="font-bold text-[#0f2e1f]">98.4% precision</span> rate 
              by synthesizing temporal datasets across high-voltage corridors.
            </p>
            <div className="flex gap-8 items-center pt-4">
              <button className="px-8 py-4 bg-[#0f2e1f] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#0f2e1f]/90 transition-colors shadow-lg">
                View Analytics
              </button>
              <button className="text-[#096b42] text-xs font-bold uppercase tracking-widest hover:underline transition-all">
                Documentation
              </button>
            </div>
          </div>
          
          <div className="flex-1 bg-[#f8f9fa] rounded-3xl p-10 font-mono text-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-400">Epochs Completed</span>
                <span className="font-bold text-gray-700">500/500</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-400">Validation Accuracy</span>
                <span className="font-bold text-gray-700">0.9842</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-400">Loss Metric</span>
                <span className="font-bold text-red-500">0.0213</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Inference Latency</span>
                <span className="font-bold text-blue-500">42ms</span>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
