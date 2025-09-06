import React, { useEffect, useState } from "react";

export default function AppliedSkill() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/appliedskill.json")
            .then((res) => res.json())
            .then((data) => setSkills(data));
    }, []);

    return (
        <section id="appliedskills" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Applied Skills</h2>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Credential ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">Skill Link</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {skills.map((skill, idx) => (
                            <tr key={idx} className="hover:bg-green-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                                    <a href={skill.certLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                                        {skill.title}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{skill.credentialId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={skill.certLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">View Skill</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
