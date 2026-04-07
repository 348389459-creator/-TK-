import React from 'react';

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* 返回按钮 */}
        <a href="/" className="text-sky-400 hover:text-sky-300 mb-6 inline-block text-lg transition-colors">
          &larr; 返回主页
        </a>
        
        {/* 视频播放器 */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-800">
          <video 
            controls 
            autoPlay 
            className="w-full aspect-video outline-none"
          >
            <source src="https://tianqitk-1379115483.cos.ap-guangzhou.myqcloud.com/1.mp4" type="video/mp4" />
            您的浏览器不支持视频播放，请更换谷歌浏览器。
          </video>
        </div>
      </div>
    </div>
  );
}