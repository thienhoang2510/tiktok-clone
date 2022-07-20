import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/241205531_167380222182637_1558424536040811198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=5Wmkr1rOu6gAX-ySjWj&tn=DbBB-nGEvU0OfHXP&_nc_ht=scontent.fvca1-1.fna&oh=00_AT_Ek_gPqs9263X1S_PL2Bp0r3gVlYZaithbQAliyd9gRw&oe=62CA0BB0"
                alt="YThuann"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thiện Y Thuần</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ShanYiChun</span>
            </div>
        </div>
    );
}

export default AccountItem;
