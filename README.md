# LJBucky's cli

> LJBucky 的业务使用脚手架

```
     __                __
    |  |--.--.--.----.|  |--.--.--.
    |  _  |  |  |  __||    <|  |  |
    |_____|_____|____||__|__|___  |
                            |_____|
    with ♥︎ by lianjia-fe
```

bucky 项目在这里 `https://github.com/LianjiaTech/ljbucky-core`

### 安装方式

如果没有可以使用

```
npm install @lianjia-fe/ljbucky-cli -g
```

---

### 初始化项目

```
 ljbucky new my_project -d xxx.lianjia.com
```

Options:

+ -h, --help
+ -d, --domain <domain>  项目上线域名 op 配置

---

### 项目内新建模块文件

```
 // 创建 action，默认路径 my_project/src/configs/actions/
 ljbucky action /my/path/here

 // 创建 api，默认路径 my_project/src/configs/apis
 ljbucky api myAPI

 // 创建 model，默认路径 my_project/src/configs/models
 ljbucky model MyModel

 // 创建 response，默认路径 my_project/src/configs/responses
 ljbucky response myResponse

 // 创建 service，默认路径 my_project/src/configs/services
 ljbucky service myServer
```

```
有问题随时联系 ljbucky@lianjia.com
```