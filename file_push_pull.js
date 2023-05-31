//Modules to install
//Run-> npm install webdriverio in terminal


const { remote } = require('webdriverio');

const desiredCaps = {
  deviceName: 'Galaxy S20',
  platformName: 'Android',
  platformVersion: '10',
  app: 'lt://APP10160591891684932168238931', // Enter app_url here
  isRealMobile: true,
  build: 'JavaScript Vanilla Android',
  name: 'Sample Test - JavaScript',
  network: false,
  visual: true,
  video: true,
};

async function startingTest() {
  const username = process.env.LT_USERNAME || '**********'; // Enter LT username here if environment variables have not been added
  const accessKey = process.env.LT_ACCESS_KEY || '************'; // Enter LT accesskey here if environment variables have not been added

  try {
    const driver = await remote({
      path: '/wd/hub',
      capabilities: desiredCaps,
      hostname: `${username}:${accessKey}@mobile-hub.lambdatest.com`,
      port: 80,
      logLevel: 'info',
    });
    let data = new Buffer("Hello World").toString('base64');
    await driver.pushFile('/sdcard/Download/images/file.png',data);
    console.log('File Uploaded');
    await driver.$('id=com.handycloset.android.jpegpng:id/loadButton').click();
    await driver.$('id=com.android.permissioncontroller:id/permission_allow_button').click();
    await driver.$('xpath=/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ImageView').click()
    await driver.$('id=com.handycloset.android.jpegpng:id/loadButton').click();
    await driver.$('id=com.android.permissioncontroller:id/permission_allow_button').click();
    await driver.$('xpath=/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.ImageView').click();

    const fileContentBase64 = await driver.pullFile('/sdcard/Download/images/file.png');
    console.log('File Pulled');

    await driver.deleteSession();
  } catch (error) {
    console.error("Hi error occured");
  }
}

startingTest();
