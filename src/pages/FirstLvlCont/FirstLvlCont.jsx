import styles from './FirstLvlCont.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import FirstLvlComp from '../../components/FirstLvlComp/FirstLvlComp';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function FirstLvlCont({data}) {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/area-of-activity');
    };

	 const { id } = useParams();  
    return (
        <div className={styles.background}>
				<FirstLvlComp data={[]}/>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default FirstLvlCont;
