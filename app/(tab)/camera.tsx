import {Text, TouchableOpacity} from "react-native";
import styled from "@emotion/native";
import { Camera, CameraType, CameraView } from 'expo-camera';
import {useEffect, useRef, useState} from "react";

const CameraMainView = styled.View`
  flex: 1;
  justify-content: center;
`

const CameraButtonView = styled.View`
  flex: 1,
`
const CameraPage = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [facing, setFacing] = useState<CameraType>('back');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <CameraMainView>
        <CameraView
          ref={cameraRef}
          facing={facing}
          style={{ flex: 1 }}
        />
      </CameraMainView>
    </>
  );
}

export default CameraPage