import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType(); // Detects navigation type: 'PUSH', 'POP', or 'REPLACE'

    useEffect(() => {
        if (navigationType === 'POP') {
            // Do NOT scroll on back/forward navigation
            return;
        }

        if (hash) {
            // Scroll to the anchor if hash is present
            const anchor = document.querySelector(hash);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Scroll to the top on normal navigation (PUSH or REPLACE)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, hash, navigationType]);

    return null; // No visual rendering needed
};

export default ScrollToTop;