---
title: 1999.Wexley接苹果
categories:
  - JZOJ
  - JZ初中OJ
tags:
  - OJ
---

## input:**apple.in**   output:**apple.out**

时间限制: 1000 ms  空间限制: 128000 KB

## 题目描述

​         Wexley最近发现了一个古老的屏幕游戏。游戏的屏幕被划分成n列。在屏幕的底端，有一个宽为m列的篮子（m<n）。在游戏过程中，Wexley能左右移动这个篮子，            Wexley的操作很犀利，移动是瞬间完成的，但是篮子必须始终都在屏幕中。 苹果从屏幕的顶端落下，每个苹果从n列中的某一列顶端掉落，垂直掉落到屏幕的底端。每个苹果总是在上一个苹果掉落到底端的时候开始掉落。Wexley想要通过移动篮子来接住所有的苹果。起先，篮子在屏幕的最左端。
​         求出Wexley要接住所有的苹果所需移动的最短距离。 



## 输入

第一行，两个整数n、m，如题所述
第二行，一个整数k，表示掉落的苹果总数
接下来k行，每行一个整数Ai，表示每个苹果掉落的位置

## 输出

一行一个整数，表示所需移动最短距离

## 样例输入

```
Sample Input1:
5 1
3
1
5
3

Sample Input2:
5 2
3
1
5
3 
```

## 样例输出

```
Sample Output1:
6

Sample Output2:
4
```

## 数据范围限制

【数据范围】
对于30%的数据，m<n<=5,k<=10
对于100%的数据，1<=m<n<=10,1<=k<=20

## 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,k,a[21];
int b[21],head,ans,tmp;
int main()
{
    freopen("apple.in","r",stdin);
    freopen("apple.out","w",stdout);
    cin>>n>>m>>k;
    b[0]=1;
    for(int i=1;i<=k;i++)
    {
        cin>>a[i];
    }
    head=m;
    for(int i=1;i<=k;i++)
    {
        if(head>=a[i] && (head-m+1)<=a[i])
        continue;
        if(head<a[i])
        {
            ans+=a[i]-head;
            head+=a[i]-head;
            continue;
        }
        if((head-m+1)>a[i])
        {
            int tmp=head;
            head=a[i]+m-1;
            ans+=tmp-head;
            continue;
        }
    }
    cout<<ans;
}
```

