import styles from './FirstLvlCont.module.scss';
import Button from '../Button/Button';
import BackButton from '../BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function FirstLvlComp({ data = [] }) {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/area-of-activity');
    };
    const handleClickVolg = () => {
        navigate('/second-lvl-cont');
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
                    {data.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className={styles.buttonColumn}>
                    {data.map((item, index) => (
                        <Button className={styles.button} key={index} />
                    ))}
                </div>
            </div>
            <div className={styles.imageBlock}>
                {data.map((item, index) => (
                    <img className={styles.image} src="/images/background.jpg" alt="фото" />
                ))}
            </div>
        </div>
    );
}
export default FirstLvlComp;
