import PNotify from '../../../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from '../../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';
import { messages } from './messages';

const error = () => {
  PNotify.error({
    title: 'Error',
    text: messages.error,
    modules: {
      Desktop: {
        desktop: true,
      },
    },
  });
};

const infoNoEnter = () => {
  PNotify.info({
    title: 'Info',
    text: messages.infoNoEnter,
    modules: {
      Desktop: {
        desktop: true,
      },
    },
  });
};

const infoNoFind = () => {
    PNotify.success({
      title: 'Info',
      text: messages.infoNoFind,
      modules: {
        Desktop: {
          desktop: true,
        },
      },
    });
  };

export { error, infoNoEnter, infoNoFind };