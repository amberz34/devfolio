import React, { useEffect, useRef } from 'react';
import { certificationData } from "../../constants";
import VanillaTilt from "vanilla-tilt";
import styles from "./CertificationTile.module.scss";

const CertificationCard = ({ certification, isDesktop }) => {
  const { title, issuedBY, IssuedDate, CredentialID, CertificateURL } = certification;
  const certificationCard = useRef(null);

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  useEffect(() => {
    VanillaTilt.init(certificationCard.current, options);
  }, [certificationCard]);

  return (
    <div
      className={`overflow-hidden rounded-3xl ${styles.CertificationTile}`}
      ref={certificationCard}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "0 0 auto", // Changed to prevent stretching in the marquee
        background: `linear-gradient(135deg, #0f0b24, #231d4b)`, // Updated gradient for dark theme
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <a
        href={CertificateURL}
        target="_blank"
        rel="noreferrer"
        className="h-full w-full flex flex-col justify-between p-6"
      >
        <h1 className="font-medium text-3xl sm:text-4xl z-10 text-[#EFF3F4]">
          {title}
        </h1>
        <p className="text-lg z-10 tracking-wide font-medium text-[#EFF3F4]">
          Issued by: {issuedBY}
        </p>
        <p className="text-lg z-10 tracking-wide font-medium text-[#EFF3F4]">
          Issued date: {IssuedDate}
        </p>
        <p className="text-lg z-10 tracking-wide font-medium text-[#EFF3F4]">
          Credential ID: {CredentialID}
        </p>
      </a>
    </div>
  );
};

const Certifications = ({ isDesktop }) => {
  return (
    <div id="certifications" className="certifications-section overflow-hidden">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6" style={{ color: '#EFF3F4' }}>My Certifications</h1>
        <div className="marquee">
          <div className="flex animate-marquee">
            {certificationData.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} isDesktop={isDesktop} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          overflow-x: hidden;
          white-space: nowrap;
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Certifications;
