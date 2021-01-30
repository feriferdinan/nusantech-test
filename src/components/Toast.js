import Toast from 'react-native-toast-message';

let toast;

export default function showToast(
  message="",
  type="info",
  duration = 4000,
  offset = 100,
) {
  Toast.show({
    type,
    position: 'top',
    text1: 'Attention',
    text2: message,
    visibilityTime: duration,
    autoHide: true,
    topOffset: offset,
  });
}

export function hideLoading() {
  Toast.hide(toast);
}

export function showErrorToast(message, offset) {
  showToast(message, 'error', offset);
}

export function showSuccessToast(message, offset) {
  showToast(message, 'success', offset);
}

export function showInfoToast(message, offset) {
  showToast(message, 'info', offset);
}
