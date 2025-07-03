import styles from './ManRitec.module.scss';
import ManagerCard from '../../components/ManagerCard/ManagerCard';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

function ManRitec() {
    const navigate = useNavigate();

    const handleClickMain = () => {
        navigate('/managment');
    };

    return (
        <div className={styles.background}>
            <div className={styles.titleWrapper}>
                <h2>Руководство РИТЭК</h2>
            </div>
            <div className={styles.manWrapper}>
                <ManagerCard text={'Нургалиев Ренат\n Галеевич'} />
                <ManagerCard text={'Батталов Радик\n Маратович'} />
                <ManagerCard text={'Беркута Юрий\n Николаевич'} />
                <ManagerCard text={'Палий Алексей\n Петрович'} />
                <ManagerCard text={'Широков Андрей\n Анатольевич'} />
            </div>
            <BackButton className={styles.backButton} onClick={handleClickMain} variant="blue" />
        </div>
    );
}
export default ManRitec;
