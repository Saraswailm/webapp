import React from 'react';
import { ShieldAlert, Brush as Virus, Fingerprint, CreditCard, Mail, Bomb } from 'lucide-react';

const ThreatTypes = () => {
  const threats = [
    {
      icon: <Virus className="h-8 w-8 text-red-500" />,
      title: 'Malware',
      description: 'Harmful software designed to gain unauthorized access to computers and networks'
    },
    {
      icon: <Fingerprint className="h-8 w-8 text-red-500" />,
      title: 'Phishing',
      description: 'Deceptive attempts to steal sensitive information by masquerading as trustworthy entities'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-red-500" />,
      title: 'Scam Sites',
      description: 'Fraudulent websites designed to trick users into making payments or sharing data'
    },
    {
      icon: <ShieldAlert className="h-8 w-8 text-red-500" />,
      title: 'Exploits',
      description: 'Sites that attempt to exploit vulnerabilities in browsers or operating systems'
    },
    {
      icon: <Mail className="h-8 w-8 text-red-500" />,
      title: 'Spam',
      description: 'Unwanted messages and content that can lead to malicious websites'
    },
    {
      icon: <Bomb className="h-8 w-8 text-red-500" />,
      title: 'Ransomware',
      description: 'Malicious software that encrypts files and demands payment for decryption'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {threats.map((threat, index) => (
        <div 
          key={index}
          className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 transition-all hover:border-red-800 hover:shadow-lg hover:shadow-red-900/10"
        >
          <div className="mb-4">
            {threat.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{threat.title}</h3>
          <p className="text-gray-400 text-sm">{threat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreatTypes;