import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, RefreshCw, Search } from 'lucide-react';
import toast from 'react-hot-toast';

type ScanResult = {
  url: string;
  isSafe: boolean;
  threats?: string[];
  score: number;
  method: string;
  confidence: string;
};

const UrlScanner = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  /* ─── helpers ─── */
  const isValidUrl = (u: string) => {
    try {
      new URL(u);
      return true;
    } catch {
      return false;
    }
  };

  /* ─── submit ─── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return toast.error('Please enter a URL to scan');

    let urlToScan = url;
    if (!/^https?:\/\//i.test(urlToScan)) urlToScan = 'https://' + urlToScan;
    if (!isValidUrl(urlToScan)) return toast.error('Please enter a valid URL');

    setIsScanning(true);
    setResult(null);

    try {
      const res = await fetch(
        'https://guard-extension-api-2.onrender.com/predict',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: urlToScan,
            features: Array(12).fill(0)
          })
        }
      );

      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json(); // matches extension’s shape

      const isSafe = data.final_decision !== 'phishing';
      const scanResult: ScanResult = {
        url: urlToScan,
        isSafe,
        threats: isSafe ? [] : data.details?.tags ?? ['phishing'],
        score: Math.round((data.details?.confidence ?? 0) * 100),
        method: data.details?.methodUsed ?? data.flagged_by ?? 'Unknown',
        confidence: data.details?.confidence
          ? `${Math.round(data.details.confidence * 100)}%`
          : 'N/A'
      };

      setResult(scanResult);
      isSafe
        ? toast.success('URL is safe!')
        : toast.error('Potential threats detected!');
    } catch (err) {
      console.error('Scan error:', err);
      toast.error('Error scanning URL');
    } finally {
      setIsScanning(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
  };

  /* ─── render ─── */
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Input */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <div className="relative flex-grow">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter a URL to scan (e.g., example.com)"
              className="w-full px-5 py-4 pr-12 bg-neutral-900 border border-neutral-700 rounded-l-md
                         focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-gray-100
                         placeholder-gray-500 disabled:opacity-60"
              disabled={isScanning}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <button
            type="submit"
            disabled={isScanning}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-4 rounded-r-md
                       focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
                       disabled:opacity-60"
          >
            {isScanning ? <RefreshCw className="h-5 w-5 animate-spin" /> : 'Scan'}
          </button>
        </div>
      </form>

      {/* Loader */}
      {isScanning && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center animate-pulse">
          <RefreshCw className="h-12 w-12 mx-auto text-red-500 animate-spin" />
          <h3 className="mt-4 text-xl font-semibold">Scanning URL...</h3>
          <p className="mt-2 text-gray-400">
            We’re analyzing the URL for potential security threats.
          </p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div
          className={`bg-neutral-900 border ${
            result.isSafe ? 'border-green-600' : 'border-red-600'
          } rounded-lg p-8 animate-fadeIn`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                {result.isSafe ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <span className="text-green-500">Safe Website</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                    <span className="text-red-500">Malicious Website</span>
                  </>
                )}
              </h3>
              <p className="mt-1 text-sm text-gray-400 break-all">{result.url}</p>
            </div>
            <button onClick={handleReset} className="text-gray-400 hover:text-white">
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>

          {/* Score + Threats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-800 rounded p-4">
              <h4 className="text-sm font-medium text-gray-400">Detection Source</h4>
              <p className="mt-1 font-medium text-gray-200">{result.method}</p>
            </div>

            <div className="bg-neutral-800 rounded p-4">
              <h4 className="text-sm font-medium text-gray-400">Confidence</h4>
              <p className="mt-1 font-medium text-gray-200">{result.confidence}</p>
            </div>
          </div>

          {!result.isSafe && (
            <div className="mt-4 bg-red-900/30 border border-red-800 rounded p-4">
              <h4 className="font-medium text-red-400">Warning</h4>
              <p className="mt-1 text-sm text-gray-300">
                This URL may attempt to steal your personal information or install
                malware. We recommend avoiding it.
              </p>
            </div>
          )}

          {result.isSafe && (
            <div className="mt-4 bg-green-900/30 border border-green-800 rounded p-4">
              <h4 className="font-medium text-green-400">Safe to browse</h4>
              <p className="mt-1 text-sm text-gray-300">
                Our scan found no malicious content. Stay vigilant while browsing.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UrlScanner;
