import React from 'react';

export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    (this as any).state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    const state = (this as any).state;
    if (state.hasError) {
      let displayMessage = "Something went wrong.";
      try {
        const parsed = JSON.parse((state.error as any)?.message || "");
        if (parsed.error) {
          displayMessage = `Database Error: ${parsed.error}`;
        }
      } catch (e) {}

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white p-6 text-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-serif mb-4 text-[#D4AF37]">Oops!</h2>
            <p className="text-stone-400 mb-8">{displayMessage}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#D4AF37] text-[#121212] px-6 py-2 rounded-full font-bold uppercase tracking-widest"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
