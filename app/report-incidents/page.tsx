'use client'
import { useState } from "react"

export default function ReportIncidentsPage() {

    const [incident, setIncident] = useState({
        title: "",
        description: ""
    })

    const [isProcessing, setIsProcessing] = useState(false);

    function handleChange(e: any) {
        setIncident({ ...incident, [e.target.name]: e.target.value })
    }

    function cleanUpForm() {
        setIncident({
            title: "",
            description: ""
        })
    }

    async function handleSubmit(e: any) {
        setIsProcessing(true);
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4800/incidents", {
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(incident)
            })
            const data = await response.json();
            setIsProcessing(false);
            cleanUpForm();
        }
        catch (error) {
            console.log(error);
            setIsProcessing(false);
        }

    }

    return <div className="container mx-auto p-4">
        <h1 className="text-xl mb-4">Report a Incident</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block">Title</label>
                <input className="w-full p-2 border rounded" type="text" id="title" name="title" value={incident.title} onChange={handleChange} />
            </div>
            <div>
                <label className="block">Description</label>
                <textarea className="w-full p-2 border rounded" id="description" name="description" value={incident.description} onChange={handleChange}></textarea>
            </div>
            <button disabled={isProcessing} type="submit" className={`text-white px-4 py-2 rounded ${isProcessing ? 'bg-gray-800' : 'bg-blue-500 hover:bg-blue-600'}`}>Submit Incident</button>
        </form>
    </div>
}