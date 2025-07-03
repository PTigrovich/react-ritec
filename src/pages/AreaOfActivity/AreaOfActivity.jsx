import styles from './AreaOfActivity.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function AreaOfActivity() {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };

    const handleClickConcern = () => {
        navigate('/first-lvl-cont/1');
    };
    const handleClickNo = () => {
        navigate('/first-lvl-cont/2');
    };
    const handleClickCharity = () => {
        navigate('/first-lvl-cont/3');
    };
    const handleClickScience = () => {
        navigate('/first-lvl-cont/4');
    };
    const handleClickMaster = () => {
        navigate('/first-lvl-cont/5');
    };
    const handleClickSocial = () => {
        navigate('/first-lvl-cont/6');
    };
    const handleClickEco = () => {
        navigate('/first-lvl-cont/7');
    };
    const handleClickSecurity = () => {
        navigate('/first-lvl-cont/8');
    };
    const handleClickLife = () => {
        navigate('/first-lvl-cont/9');
    };

    return (
        <div className={styles.background}>
            <div className={styles.buttonColumn}>
                <Button className={styles.button} text={'региональные \n предприятия'} onClick={handleClickConcern} />
                <Button className={`${styles.button} ${styles.logoButton}`} onClick={handleClickNo} />
                <Button className={styles.button} text={'благотворительность'} onClick={handleClickCharity} />
                <Button className={styles.button} text={'наука'} onClick={handleClickScience} />
                <Button className={styles.button} text={'конкурс \n профессионального \n мастерства'} onClick={handleClickMaster} />
                <Button className={styles.button} text={'конкурс \n социальных и \n культурных прроектов'} onClick={handleClickSocial} />
                <Button className={styles.button} text={'экология'} onClick={handleClickEco} />
                <Button className={styles.button} text={'промышленная \n безопасность'} onClick={handleClickSecurity} />
                <Button className={styles.button} text={'профсоюзная жизнь'} onClick={handleClickLife} />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default AreaOfActivity;
