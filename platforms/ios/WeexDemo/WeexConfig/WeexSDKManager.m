//
//  WeexSDKManager.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/14.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexSDKManager.h"
#import "DemoDefine.h"
#import <WeexSDK/WeexSDK.h>
#import "WXDemoViewController.h"
#import "WXImgLoaderDefaultImpl.h"

#if DEBUG
#import <WXDevTool.h>
#endif

@implementation WeexSDKManager

+ (void)setup;
{
#if DEBUG
    [WXDevTool setDebug:NO];
    [WXDevTool launchDevToolDebugWithUrl:@"ws://172.19.40.56:8100/debugProxy/native/5"];
#endif
    
    NSURL *url = nil;
#if DEBUG
    //If you are debugging in device , please change the host to current IP of your computer.
    url = [NSURL URLWithString:BUNDLE_URL];
#else
    url = [NSURL URLWithString:BUNDLE_URL];
#endif
    NSString * entryURL = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"WXEntryBundleURL"];
    if (entryURL) {
        if ([entryURL hasPrefix:@"http"]) {
            url = [NSURL URLWithString:entryURL];
        } else {
            url = [NSURL URLWithString:[NSString stringWithFormat:@"%@%@",[[NSBundle bundleForClass:self] resourceURL].absoluteString, entryURL]];
        }
    }
    
#ifdef UITEST
    url = [NSURL URLWithString:UITEST_HOME_URL];
#endif
    
    [self initWeexSDK];
    [self loadCustomContainWithScannerWithUrl:url];
}

+ (void)initWeexSDK
{
    [WXAppConfiguration setAppGroup:@"AliApp"];
    [WXAppConfiguration setAppName:@"WeexDemo"];
    [WXAppConfiguration setAppVersion:@"1.8.3"];
    [WXAppConfiguration setExternalUserAgent:@"ExternalUA"];
    
    [WXSDKEngine initSDKEnvironment];
    
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelLog];
#endif
}

+ (void)loadCustomContainWithScannerWithUrl:(NSURL *)url
{
    UIViewController *demo = [[WXDemoViewController alloc] init];
    ((WXDemoViewController *)demo).url = url;
    [[UIApplication sharedApplication] delegate].window.rootViewController = [[WXRootViewController alloc] initWithRootViewController:demo];
}

@end
