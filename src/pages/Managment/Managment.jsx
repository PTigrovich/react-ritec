import styles from './Managment.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';


function Managment() {

	const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/');
    };
	 const handleClickLucoil = () => {
         navigate('/dir-lukoil');
    };
	 const handleClickRitec = () => {
         navigate('/man-ritec');
    };


	return (
        <div className={styles.background}>
            <div className={styles.logoWrapper}></div>
            <div className={styles.buttonsContainer}>
                <Button onClick={handleClickLucoil} text={'СОВЕТ ДИРЕКТОРОВ\n ПАО «ЛУКОЙЛ»'} className={styles.contentButton} />
                <Button onClick={handleClickRitec} text={'РУКОВОДСТВО \n ООО «РИТЭК»'} className={styles.contentButton} />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default Managment;
