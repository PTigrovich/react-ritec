import styles from './AreaOfActivity.module.scss';
import Button from '../../components/Button/Button'
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function AreaOfActivity() {

	const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };
	 const handleClickConcern = () => {
         navigate('/concern');
     };

    return (
        <div className={styles.background}>
            <div className={styles.buttonColumn}>
                <Button className={styles.button} text={'региональные \n предприятия'} onClick={handleClickConcern} />
                <Button className={`${styles.button} ${styles.logoButton}`} />
                <Button className={styles.button} text={'благотворительность'} />
                <Button className={styles.button} text={'наука'} />
                <Button className={styles.button} text={'конкурс \n профессионального \n мастерства'} />
                <Button className={styles.button} text={'конкурс \n социальных и \n культурных прроектов'} />
                <Button className={styles.button} text={'экология'} />
                <Button className={styles.button} text={'промышленная \n безопасность'} />
                <Button className={styles.button} text={'профсоюзная жизнь'} />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default AreaOfActivity;
