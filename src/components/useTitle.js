import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTitle = (titleKey) => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t(titleKey);
    },[titleKey, t]);
};

export default useTitle;
