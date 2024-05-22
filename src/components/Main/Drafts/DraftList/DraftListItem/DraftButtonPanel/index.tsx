import './DraftButtonPanel.css'

function DraftButtonPanel(draft: {draftId: number}) {
    

    return(
        <>
            <button>Post now</button>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default DraftButtonPanel