import React from 'react'
import Faq from '../components/Faq'

const Contact = () => {
  return (
    <div className='mt-30'>
      <h1 className="text-3xl font-semibold text-center mx-auto">About our Creation</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src="https://i.pinimg.com/1200x/9a/ff/14/9aff1417f4b5a05365b1f01f83cecd2e.jpg"
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                        Components.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                                <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                                <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faq/>
    </div>
  )
}

export default Contact
