import { getEnv, ENV_TYPE } from '@tarojs/taro';
import { useEffect, useState } from 'react';

function useEnv() {
  const [env, setEnv] = useState('');

  useEffect(() => {
    setEnv(getEnv());
  }, []);

  return env;
}

export default useEnv;
