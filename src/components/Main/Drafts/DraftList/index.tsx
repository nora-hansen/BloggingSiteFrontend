import { IPost } from '../../../../App';
import './DraftList.css'
import DraftListItem from './DraftListItem';

function DraftList(drafts: {drafts: IPost[]}) {
    if (!drafts) return <p>Loading...</p>

    return(
        <div className="draft-list">
            {drafts.drafts.map((draft, index) => 
                <DraftListItem 
                key={index} 
                id={draft.id}
                title={draft.title}
                content={draft.content}
                postDate={draft.postDate}
                userID={draft.userID}
                visibility={draft.visibility}
                isDraft={draft.isDraft}
                />
            )}
        </div>
    )
}

export default DraftList;