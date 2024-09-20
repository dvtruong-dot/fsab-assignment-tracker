export default function AssignmentList({assignments}) {
    const numToPriorityDict = {0 : "High", 1 : "Medium", 2 : "Low"};

    //TODO: NEED TO TRIM DUE DATE BEFORE DISPLAYING
    const sortedAssignments = assignments.sort((a,b) => {
        const dateComparison = new Date(a.due) - new Date(b.due);

        if (dateComparison != 0) {
            return dateComparison;
        }

        const priorityComparison = a.importance - b.importance;
        return priorityComparison;
    })

    return (
        <div>
            <table id="assignment-table">
                <thead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Due Date</th>
                        <th>Priority Level</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedAssignments.map((assignment, index) => (
                            <tr key={assignment.id}>
                                <td className="assignment-name">{assignment.name}</td>
                                <td className="due-date">{assignment.due.toString()}</td>
                                <td className="priority-level">{numToPriorityDict[assignment.importance]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}