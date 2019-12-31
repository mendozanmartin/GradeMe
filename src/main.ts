// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import * as application from "tns-core-modules/application";

declare var android;

// Hide Status bar android
application.android.on(application.AndroidApplication.activityCreatedEvent, (event) => {

    const activity = event.activity;

    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
        activity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        activity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        activity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        activity.getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
    } else {
        activity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    }

    const parent = activity.findViewById(android.R.id.content);
    for (let i = 0; i < parent.getChildCount(); i++) {
        const childView = parent.getChildAt(i);
        if (childView instanceof android.view.ViewGroup) {
            childView.setFitsSystemWindows(true);
            childView.setClipToPadding(true);
        }
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
