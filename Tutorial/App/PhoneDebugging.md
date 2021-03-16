## 前言

> 首先保证`iTunes`或`Android手机助手`（如360手机助手）可以正常连接手机。

> 如果仍有问题请查阅以下问题是否与自己遇到的情况相同

**特别注意**：
- `iOS13真机运行，需要升级至HBuilderX 2.2.5+以上版本。`
- `Android11系统真机运行，暂不支持Android Studio自带的Android11模拟器，请使用真实手机，如果碰到Android11手机无法真机运行，请单独发帖，并提供详细设备信息。`
- itunes `12.10.9.3`版本，连接`ios 14+`的iphone手机，可能存在问题；请下载12.9.4.102之前的版本 

出现问题手机分析清楚问题在哪个环节。
从在HBuilder/HBuilderX菜单里点真机运行，程序会执行如下几个步骤：

1. 手机硬件通过usb线连接到HBuilder所在电脑，此时可能因为`手机驱动`、usb口、数据线、手机硬件等多种问题造成连接失败。
2. HBuilderX通过adb或itunes服务检测手机。此时可能因为手机渠道、usb连接设置、adb设置或adb冲突、itunes设置造成检测不到。
3. HBuilderX安装调试基座到手机。此时可能因为手机禁止usb安装、Android手机没有sd卡、iOS手机没有信任证书而安装失败。
4. HBuilderX将ide中的代码同步到手机上并启动调试基座。这一步一般不会出问题。


下面把各种常见FAQ列出，大家可按图索骥。

## 1. 没有运行到手机的菜单

> 真机运行只能运行App项目，选中App项目或将焦点放在将要运行的App项目的文件编辑器上

HBuilderX支持web项目和app项目，项目前面是有图标的，W表示web项目，A表示App项目。其中只有`App项目可以运行`。

HBuilderX支持项目类型较多，只有`uni-app`、`5+app`、`wap2app`可以真机运行。他们都会在项目根目录下有个`manifest.json`文件（uni-cli项目会在src目录下有manifest.json）。

## 2. 检查手机设置

特别注意：Windows连接Android手机，一定要确保电脑已安装相应的手机驱动。

1. 确保数据线或usb口正常，可替换不同的线或口来验证。
2. 确认Android手机设置中`USB调试`模式已开启。这个设置一般在【设置】【开发者选项】里。有的手机在插上数据线后在push通知栏里也可以设置。注意不能设置为u盘模式，如果是充电模式则必须同时设置充电时`允许usb调试`。
3. 如手机屏幕弹出需信任本计算机的询问，请`同意该授权`。并且最好是把始终同意该设备调试勾上。如不小心拒绝，需要重插手机或重启电脑。
4. Android5.0及以上系统，不要使用访客模式。这种模式下无法成功运行。
5. 部分手机如小米，有usb安装应用的权限设置，需在手机上允许通过usb安装应用。不同rom的界面不一样，请自行百度你的手机打开usb安装应用的方式。

## 3. Mac 连接手机/模拟器说明

分Android和iOS手机分别列出排查方式：

### 3.1 Mac: iOS真机

1. 确认手机已通过数据线连接电脑
2. 确认iTunes能正常连接手机
3. 如手机屏幕弹出需信任本计算机的询问，请同意该授权

### 3.2 Mac: iOS模拟器

1. Xcode必须安装在应用程序（Application）中
2. 首先确认Xcode（版本必须是6.0及以上版本）已安装并能正常启动模拟器
3. 如果仍然无法检测到，则打开Xcode，然后打开Xcode的 `Preferences --> Locations`，设置该界面中的 `Command Line Tools` 项，选择正确的`Xcode`版本即可

<img src="/static/snapshots/tutorial/ios_simulator.png" />

### 3.2 Mac: 连接Android手机

1. 关于本机(指Mac系统的关于本机，非手机) --> 系统报告 -> usb  -> 你所连接的device --> 厂商ID或者供应商ID(Vendor ID)
2. 在终端执行如下命令：echo xxxxxx >> ~/.android/adb_usb.ini （“xxxxxx”为厂商ID或者供应商ID(Vendor ID)，有些系统下echo命令并不能正确写入文件，可在~/.android/目录下修改或新建adb_usb.ini添加xxxxxx）
3. 重启HBuilderX。
4. 如重启HBuilderX仍然不行，请使用命令行(终端.app)，切换到HBuilderX自带的adb目录。
5. HBuilderX正式版的adb目录位置：tools/adbs目录（MAC下为HBuilderX.app/Contents/tools/adbs目录）
6. HBuilderX Alpha版的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
7. 在adbs目录下运行`./adb kill-server`重试。
8. 重启电脑重试。

## 4. Windows 连接手机/模拟器说明

### 4.1 Windows: 连接Android手机

#### 4.1.1 驱动：

> 请确认已安装Android手机驱动。

如果手机连接没有任何反应或提示驱动问题，可通过以下方式解决：
  1. 安装`驱动精灵`类程序，通过它们来安装驱动
  2. 装驱动比较好的方式是使用各种手机助手，比如`360、腾讯的各种手机助手`，如果有问题，尝试升级助手的版本。

#### 4.1.2 其它注意事项：
  1. 如果在启动HBuilderX后才安装驱动连接上手机，可能需要重启HBuilderX。
  2. 使用管理员权限运行HBuilder。
  3. 关闭WebView调试模式，重启HBuilderX重试。
  4. 如果其他软件可以连接手机，而HBuilderX无法检测到手机，可能是其他软件独占了Google的ADB服务通道。
  5. Android的`ADB服务`已经被大量软件滥用，除了各种手机助手自带adb，其他如QQ、搜狗输入法、暴风影音、酷狗音乐、阿里旺旺等众多软件都自带`adb`。有些工具的`adb`版本低且独占手机通道，就会导致HBuilderX无法连接手机。
  6. 在任务管理器中找到`adb.exe`相关进程（包括`kadb.exe`等），在任务管理中右键该进程，打开文件位置，查看该进程是什么软件启动的。
  7. 禁止这些软件监听手机插入（一般在该软件的设置中）、禁止自动启动。
  8. 有些软件结束adb进程后又会自动启动，所以得将`adb.exe`文件重命名一下，实在不行卸载了这些流氓软件。
  9. 关闭所有手机助手及进程里各种`adb.exe`（包括`kadb.exe`等），再试。

#### 4.1.3 adb占用问题

如果你找不到被谁占用，则还可以使用如下方式检测，寻找幕后黑手：
1. 打开命令行窗口
2. 确认adb的启动进程：
  寻找端口是`5037`的`tcp连接`，在命令行中输入：`netstat -ano | findstr 5037`
  
  在输出结果中找到类似下面的一行：
  TCP    127.0.0.1:5037         0.0.0.0:0              **LISTENING**       **5816**
  *如果内容为空，可能是没有程序在占用adb端口。*
  
  或者使用 netstat -ano | findstr 5037>d:/1.txt 输出到文件中查找。
  根据查询结果确认端口为5037的连接被那个进程占用，结果中显示的“5816”表示占用adb端口的进程PID。

3. 根据进程的PID可以找到具体进程。

  在命令行中输入：`tasklist | findstr 5816`
  在输出结果中找到类似下面的一行：
  ```shell
  adb.exe                     5816 Console                 0      4,440 K
  ```
  adb.exe（名称一般不是adb.exe，以adb.exe举例）为启动的adb进程。
  或者手工在任务管理器中定位这个进程，打开任务管理器后，进入进程选项卡，如果列表里有PID，直接找；如果列表里没有PID，点菜单查看-选择列，勾上PID。

#### 4.1.4 其它问题

如果以上方式仍然不行，还有一种可能是手机对adb的版本有特定要求（遇到一些魅族手机有此问题），此时需要更换HBuilder的adb版本。
- HBuilder安装目录下带了多个版本的adb。
- HBuilder的adb目录位置：tools/adbs目录（MAC下为HBuilder.app/Contents/tools/adbs目录）
- HBuilderX的adb目录位置：plugins/launcher/tools/adbs目录（MAC下为`/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/launcher/tools/adbs`目录）
替换版本前，将默认版本的adb.exe备份下。然后把1.0.31版的adb.exe拷贝出来替换主目录下的exe。

### 4.2 Windows: 连接iOS手机

1. 确认手机已通过数据线连接电脑
2. 确认已安装iTunes，若未安装点击[itunes历史版本下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/), 请下载12.9.4.102之前的版本
3. 确认iTunes能正常连接手机
4. 如手机屏幕弹出需信任本计算机的询问，请同意该授权
5. 如果是第一次安装完itunes，建议重新启动HBuilderX
6. 如果以上方案都无法解决，有可能是因为本地库与iTunes带的库冲突了，一般是iTunes库目录（32位系统目录为：C:\Program Files\Common Files\Apple\Apple Application Support，64位系统目录为：C:\Program Files (x86)\Common Files\Apple\Apple Application Support）下的dll文件和系统库目录（32位系统目录为：C:\WINDOWS\system32，64位系统目录为：C:\Windows\SysWOW64）下的dll重名，可将iTunes库目录下的同名dll文件拷贝到系统库目录下，或者将系统目录下的同名dll文件重命名或删除，然后再重启HBuilder或者重试真机运行
7. 有可能是iTunes安装时依赖库丢失，尝试重装iTunes解决问题 
8. iTools提供了一个修复驱动的工具和教程，可以参考[http://bbs.itools.cn/thread-129390-1-1.html](http://bbs.itools.cn/thread-129390-1-1.html)

**注意1：**

itunes `12.10.9.3`版本，连接`ios 14+`的iphone手机，可能存在问题。

如无法连接，请下载itunes历史版本。 [itunes历史版本下载地址](https://mydown.yesky.com/pcsoft/33491427/versions/)


**注意2：**

iTunes12.1起更改了接口，会造成无法连接：
  ①、HBuilderX菜单：工具 - 插件安装，打开插件安装界面，选择【iOS连接插件】（HBuilderX叫做真机运行插件）并安装，安装完并重启HBuilderX，尝试是否解决；
  ②、安装最新版本的iTools，重启HBuilderX。

## 5. 其它问题

### Q1: 能检测到手机，但处于置灰状态无法点击

发生此情况一般为检测到手机后，中间因为其他软件连接断开了，需要重新插拔手机或重启HBuilderX。

### Q2: 能检测到手机，但点HBuilder的真机运行，安装调试基座失败

1. 部分Android rom如小米有usb安装apk的权限，可能是关闭状态，此时需要在手机管家等设置里寻找usb安装apk的权限，将其打开。
2. 部分Android手机在usb安装apk时，会在手机界面上弹框，如果不能及时点弹框，会因为超时而安装失败。请注意手机屏幕的显示。
   当HBuilder控制台提示`“安装HBuilder基座App失败，请使用手机助手手动安装xxx\android_base.apk。”`时，基本都属于这种情况。
3. iOS版本偶发也会报错。同样需要根据提示手动安装iPhone_base.ipa。安装方式推荐itools，没有itools使用itunes也可以。
安装完毕后，会在手机上有一个HBuilder的应用。
以后再点真机运行，就可以把项目部署到手机上，然后手动点击HBuilder应用，就能看到项目的结果。

### Q3: HBuilder控制台不输出日志问题的解决办法

参考[http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)

### Q4: Android手机真机运行提示应用安装成功，但是其实手机上并没有HBuilder应用

1. 确认USB调试模式是否打开。如果未打开，请打开USB调试模式重新运行真机调试。
2. 如果HBuilder已经检测到手机，可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试。 
3. 利用手机助手手动安装android_base.apk到手机上，然后重新运行真机调试。

### Q5: Android真机联调报文件操作Permission denied

请尝试以下方法解决：
	1、拔出数据线
	2、重新`打开USB调试模式`
	3、重新插上数据线，此时手机上可能需要授权确认，点击确认
	4、重新运行真机调试看看是否还有问题
	5、重启手机，再重新运行真机调试，看看问题是否解决
	6、如果还有问题，重新启动HBuilder，重复1-4步骤，再重新运行真机调试，看看问题是否解决
	7、如果问题仍然没有解决，则重新安装手机驱动：
	   1）我的电脑---右键--属性--硬件---设备管理器--删除USB驱动
	   2）打开手机助手重新安装驱动
	     此时手机上可能需要授权确认，点击确认，然后再重新运行真机调试
	8、如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题

### Q6: Android真机联调报：open '/dev/hwlog_switch' fail -1, 13. Permission denied

请尝试以下方法解决：
    1、参考 [http://ask.dcloud.net.cn/article/1336](http://ask.dcloud.net.cn/article/1336)
    2、拔插数据线重试
    3、重新打开USB调试模式重试
    4、重启手机重试
    5、重新启动HBuilder重试
    6、如果以上方案均无法解决，则有可能是手机root的时候，把sdcard目录的权限搞错了，导致无法真机运行，此时可以恢复出厂设置，或者重新root，或者刷机解决此问题


### Q7: 为什么Android手机没有SDCard就不能真机调试？

Android没有root的手机只有SDCard才有权限。不过此SDCard并不是非得外插一张实体sd卡，是手机里一个叫SDCard的根目录。
如果是使用Android模拟器，在模拟器里可以配置SDCard是否存在及大小。
此情况已过期，目前正常手机都有SDCard目录。

### Q8: 控制台显示手机应用已启动，但手机屏幕上没有出现？

Android手机第一次安装基座应用时，手机端大多有各种杀毒软件要检测一会才会放行，需要等一会。

### Q9: 5+App运行后手机端一直在启动画面停留，不停转圈不能进入

这是应用的js代码的问题，启动画面的关闭是可配置的。参考 [http://ask.dcloud.net.cn/article/110](http://ask.dcloud.net.cn/article/110)


### Q10: 为什么我电脑没有插iphone，但HBuilder检测到iOS设备？

iTunes支持wifi同步，如果iOS设备启动了wifi同步，电脑端的iTunes就可以检测到，进而HBuilder也可以检测到。

### Q11: 真机运行成功启动，但手机端软件启动后显示的不是正在运行的项目。

这种情况是adb连接手机成功，但copy项目文件到手机上失败了。重新运行真机调试。
或者检查待运行工程的目录名文件名是不是有特殊符号或超长导致Android不识别。

### Q12: 真机运行启动后显示HBuilder真机运行（log）界面 {#synchronous}

1、重新运行真机调试尝试解决问题
2、Android设备可能存在与手机助手冲突的情况，请关闭所有的手机助手重新运行真机调试
3、如果步骤2无法解决，请更换别的手机助手，重新运行真机调试尝试解决问题
4、确认手机上HBuilder应用安装位置，如果手机上有外置sdcard，不要把HBuilder基座App安装在外置sdcard上，如果是安装在外置sdcard上，卸载外置sdcard上的HBuilder基座App，并在设置中将应用的默认安装位置不要设置为外置的sdcard上，或者将应用转移至手机内存或内置sdcard上，并重新运行真机调试

### Q13: 使用genymotion模拟器真机运行，安装apk时报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE

参见[genymotion模拟器报INSTALL_FAILED_CPU_ABI_INCOMPATIBLE的解决办法](http://blog.csdn.net/wjr2012/article/details/16359113)
其他模拟器的适配在论坛中搜索即可。

### Q14: 如何通过wifi真机运行，不插数据线？

参考[http://ask.dcloud.net.cn/article/565](http://ask.dcloud.net.cn/article/565)



