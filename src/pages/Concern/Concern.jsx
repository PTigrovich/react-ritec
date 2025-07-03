import styles from './Concern.module.scss';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function Concern() {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/area-of-activity');
    };
	 const handleClickVolg = () => {
        navigate('/volga');
    };
	 const handleClickTat = () => {
        navigate('/tat');
    };
	 const handleClickSama = () => {
        navigate('/samara');
    };

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.textColumn}>
                    <h2>
                        РЕГИОНАЛЬНЫЕ <br /> ПРЕДПРИЯТИЯ
                    </h2>
                    <h3>Страна РИТЭК</h3>
                    <p>
                        <span className={styles.invSpace}>g </span>Сегодня РИТЭК объединяет около 3 тысяч <br /> специалистов в составе трех территориально-{' '}
                        <br />
                        производственных предприятий:
                    </p>
                </div>
                <div className={styles.buttonColumn}>
                    <Button className={styles.button} onClick={handleClickVolg} text={'ТПП «Волгограднефтегаз»'} />
                    <Button className={styles.button} onClick={handleClickTat} text={'ТПП «ТатРИТЭКнефть»'} />
                    <Button className={styles.button} onClick={handleClickSama} text={'ТПП «РИТЭК-Самара-Нафта»'} />
                </div>
            </div>
            <div className={styles.imageBlock}>
                <img className={styles.image} src="/images/background.jpg" alt="фото" />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} />
        </div>
    );
}
export default Concern;
