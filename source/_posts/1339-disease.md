---
title: 1339.disease
categories:
  - JZOJ
  - JZ初中OJ
tags:
  - OJ
---

时间限制: 1000 ms  空间限制: 131072 KB

## 题目描述

  近期，农场出现了D (1<= D <=15)种细菌。John 要从他的 N (1<= N <=1,000)头奶牛中尽可能多地选些产奶。但是如果选中的奶牛携带了超过 K (1<= K <=D)种不同细菌，所生产的奶就不合格。请你帮助John 计算出最多可以选择多少头奶牛。



## 输入

第一行：三个整数 N， D， K

下面N行：第行表示一头牛所携带的细菌情况。第一个整数 di 表示这头牛所携带的细菌种类数，后面di个整数表示这些细菌的各自种类标号。

## 输出

只一个数 M，最大可选奶牛数。

## 样例输入



## 样例输出

 

## 数据范围限制

 

## 提示

**样例**

| 输入 | 6 3 2 0 1 1 1 2 1 3 2 2 1 2 2 1 | 选择： 1,2,3,5,6 只有1#和2#两种细菌 |
| ---- | ------------------------------- | ----------------------------------- |
| 输出 | 5                               |                                     |

## 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,ans,d,k,inf=-0x3f3f3f,flag[16],use[16]; 
bool a[1001][16];
void dfs(int x)
{
    for(int i=use[x-1]+1;i<=d;i++)
    {
        if(flag[i]==0)
        {
            flag[i]=1;
            use[x]=i;
            if(x==k)
            {
                for(int j=1;j<=n;j++)
                {
                       for(int i=1;i<=d;i++)
                    {
                        if(a[j][i]==true&&flag[i]==0)
                          {
                        ans--;
                        break;
                        }
                    }
                }
                if(ans>inf)
                inf=ans;
                ans=n;
            }
            else
            dfs(x+1);    
            flag[i]=0;
            use[x]=0;
        }
    }
}
int main()
{
    cin>>n>>d>>k;
    ans=n;
    for(int i=1;i<=n;i++)
    {
        scanf("%d",&a[0][0]);
        for(int j=1;j<=a[0][0];j++)
        {
            scanf("%d",&a[0][1]);
            a[i][a[0][1]]=true;
        }
    }
    dfs(1);
    cout<<inf;
    return 0;
}
```

