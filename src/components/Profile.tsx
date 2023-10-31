import { useSelector, useDispatch } from 'react-redux';
import { selectFirstName, selectLastName, selectUserOptin, selectShowHiddenContent } from "../selectors/profile";
import { toggleShowContent } from "../store/profileSlice";
import '../styles/Profile.css';

const Profile = () => {
    const dispatch = useDispatch();

    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const userOptin = useSelector(selectUserOptin);
    const showHiddenContent = useSelector(selectShowHiddenContent);

    return (
        <div className="Profile">
            <h3>Super Cool User</h3>
            <span>{firstName} {lastName}</span>
            <label className="Checkbox">
                <input
                    checked={userOptin}
                    onChange={() => dispatch(toggleShowContent())}
                    type="checkbox"
                />
                Show hidden content?
            </label>
            {showHiddenContent && <div>Only show this if user opts-in</div>}
        </div>
    );
}

export default Profile;