'use client'
import { useState } from "react"

export default function ReportIncidentsPage() {

    const [incident, setIncident] = useState({
        title: "",
        description: ""
    })

    function handleChange(e: any) {
        setIncident({ ...incident, [e.target.name]: e.target.value })
    }

    function handleSubmit(){

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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Incident</button>
        </form>
    </div>
}