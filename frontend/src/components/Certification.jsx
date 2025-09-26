
import React, { useEffect, useState } from "react";

export default function Certification() {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        fetch("/portfolio/cert.json")
            .then((res) => res.json())
            .then((data) => setCertifications(data));
    }, []);

    return (
        <section id="certifications" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Azure Certifications</h2>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Credential ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Certification Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Certification Link</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {certifications.map((cert, idx) => (
                            <tr key={idx} className="hover:bg-blue-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                                    <a href={cert.certLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {cert.title}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{cert.credentialId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{cert.certificationNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={cert.certLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
