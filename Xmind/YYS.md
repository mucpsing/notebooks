# YYS

## 基础功能

### 句柄信息

- class_name

	- 窗口类名

- WindowName

	- 窗口标题名

### 获取窗口句柄

- win32gui

	- FindWindow

- lw

### 窗口绑定

- 前台
- 后台

### 鼠标模拟

- 前台

	- pyautogui

- 后台

	- win32gui
	- pywinauto 

		- 根据GUI选择backend

### 截图

- pywinauto 

	- capture_as_image

		- 基于pillow

- lw

### 图片查找

- CV2
- dw
- lw

	- 子主题 1

### 防封机制

- 情景模式

	- 30分钟 - 45分钟
	- 45 分钟以上
	- 2小时以上
	- 4小时以上

- 随机延迟
- 范围点击
- 随机事件
- 模拟人累行为

	- 聊天
	- 发送信息
	- 查看御魂
	- 查看式神

### 配置文件实时监控

## 游戏功能

### 场景识别

### 战斗识别

## APP整体逻辑

### 环境检查

- 是否管理员
- python版本是否3.7.5
- 检查配置文件
- 检查端口

### 程序启动前（hook）

- app对象初始化
- 生成配置文件对象
- 生成日志对象

### 程序启动

## 模式

### adb

### cv2

### lw

### ts

### dm

## win32gui

### 窗口查找

- win32gui

	- FindWindow

- lw

	- 子主题 1

### 鼠标操作

- 点击

	- 前台
	- 后台

		- win32api
		- adb

- 移动

	- 前台
	- 后台

		- win32api
		- adb

- 模块

	- python

		- PyMouse
		- PyKeyboard
		- PyUserInput

			- git clone https://github.com/PyUserInput/PyUserInput.git
			- cd PyUserInput
			- python3 setup.py install

*XMind: ZEN - Trial Version*