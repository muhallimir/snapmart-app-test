import { TransitionGroup, Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function TransitionLayout({ children, location, timeout = 375, distance = 300 }) {
    const nodeRef = useRef(null);
    const TIMEOUT = timeout;
    const DISTANCE = distance;
    const dispatch = useDispatch();
    // const { routeBack } = useSelector((state) => state.app);
    const { routeBack } = false; // temporary

    const getTransitionStyles = {
        entering: {
            position: `absolute`,
            opacity: 0,
            transform: `translateX(${routeBack ? -DISTANCE : DISTANCE}px)`,
        },
        entered: {
            transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
            opacity: 1,
        },
        exiting: {
            position: `absolute`,
            inset: 0,
            margin: 'auto',
            transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
            opacity: 0,
            transform: `translateX(${routeBack ? DISTANCE : -DISTANCE}px)`,
        },
    };

    return (
        <TransitionGroup component={Stack} sx={{ position: 'relative', flex: 1 }}>
            <Transition
                nodeRef={nodeRef}
                mountOnEnter
                onExit={() => dispatch(updateApp({ transitioning: true }))}
                onEntered={() => {
                    dispatch(updateApp({ transitioning: false }));
                    if (routeBack) dispatch(updateApp({ routeBack: false }));
                }}
                key={location}
                timeout={{
                    enter: TIMEOUT,
                    exit: TIMEOUT,
                }}
            >
                {(status) => (
                    <Stack ref={nodeRef} sx={{ ...getTransitionStyles[status], flex: 1 }}>
                        {children}
                    </Stack>
                )}
            </Transition>
        </TransitionGroup>
    );
}

TransitionLayout.propTypes = {
    children: PropTypes.node.isRequired,
    timeout: PropTypes.number,
    distance: PropTypes.number,
    location: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

TransitionLayout.defaultProps = { timeout: 375, distance: 300 };
