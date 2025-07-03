import styles from './Main.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Main() {

	const navigate = useNavigate();

   const handleClickFounder = () => {
        navigate('/founder');
   };
	const handleClickManagment = () => {
        navigate('/managment');
   };
	const handleClickGeography = () => {
        navigate('/geography');
   };
	const handleClickAOA = () => {
        navigate('/area-of-activity');
   };
	const handleClickWebsite = () => {
        navigate('/website');
   };


    return (
        <div className={styles.background}>
            <div className={styles.logoWrapper}></div>
            <div className={styles.titleWrapper}>
                <h2>
                    РОССИЙСКАЯ ИННОВАЦИОННАЯ <br /> ТОПЛИВНО-ЭНЕРГЕТИЧЕСКАЯ КОМПАНИЯ
                </h2>
            </div>
            <div className={styles.buttonWrapper}>
                <Button className={styles.button} onClick={handleClickFounder} text={'ОСНОВАТЕЛЬ РИТЭК\n В.И. ГРАЙФЕР'} />
                <div className={styles.buttonColumn}>
                    <Button className={styles.button} onClick={handleClickManagment} text={'РУКОВОДСТВО'} />
                    <Button className={styles.button} onClick={handleClickAOA} text={'НАПРАВЛЕНИЯ\n ДЕЯТЕЛЬНОСТИ'} />
                    <Button className={styles.button} onClick={handleClickGeography} text={'ГЕОГРАФИЯ'} />
                    <Button className={styles.button} onClick={handleClickWebsite} text={'ПЕРЕЙТИ НА САЙТ'} />
                </div>
            </div>
        </div>
    );
}
export default Main;

