package com.cdplayer;

import com.facebook.react.ReactRootView;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactActivity;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.zmxv.RNSound.RNSoundPackage;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import com.xeodou.rctplayer.*;

public class MainActivity extends Activity/* implements DefaultHardwareBackBtnHandler*/ {

  private ReactRootView mReactRootView;
  private ReactInstanceManager mReactInstanceManager;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    // @Override
    // protected String getMainComponentName() {
    //     return "CDPlayer";
    // }

    @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            mReactRootView = new ReactRootView(this);

            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(getApplication())
                    .setBundleAssetName("index.android.bundle")
                    .setJSMainModuleName("index.android")
                    .addPackage(new ReactPlayerManager())
                    .addPackage(new VectorIconsPackage())
                    .addPackage(new MainReactPackage())
                    .addPackage(new RNSoundPackage())
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();

            mReactRootView.startReactApplication(mReactInstanceManager, "CDPlayer", null);

            setContentView(mReactRootView);
        }

}
