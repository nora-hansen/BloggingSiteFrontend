import './DraftList.css'
import DraftListItem from './DraftListItem';

function DraftList(drafts: object[]) {
    if (!drafts) return <p>Loading...</p>

    return(
        <div className="draft-list">
            {drafts.map((draft, index) => 
                <DraftListItem key={index} draft={draft}/>
            )}
        </div>
    )
}

export default DraftList;