import DraftButtonPanel from './DraftButtonPanel'
import './DraftListItem.css'

function DraftListItem(draft: {    
    id: number
    title: string,
    content: string,
    postDate: string,
    userID: number,
    visibility: number,
    isDraft: boolean}) {
    return(
        <div className="draft-list-item">
            <h1>{draft.title}</h1>
            <p>{draft.content}</p>
            <DraftButtonPanel draftId={draft.id}></DraftButtonPanel>
        </div>
    )
}

export default DraftListItem