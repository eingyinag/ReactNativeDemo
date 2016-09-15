package com.signin_demo;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.List;
import java.util.Arrays;
import android.content.Intent;
import android.os.Bundle;



public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SignIn_Demo";
    }

    // @Override
    //  protected List<ReactPackage> getPackages() {
    //      return Arrays.<ReactPackage>asList(
    //              new MainReactPackage(),
    //              cordovaPluginPackage = new CordovaPluginPackage(this)
    //      );
    //  }
  
}
