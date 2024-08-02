import StudentSuccessHeaderComponent from "./Header"
import StudentSuccessStories from "./SuccessStories"

const StudentSuccessComponent = () => {
    return (
        <div style={{overflow: "hidden"}}>
            <StudentSuccessHeaderComponent />
            <div>
                <StudentSuccessStories />
            </div>
        </div>
    )
}

export default StudentSuccessComponent