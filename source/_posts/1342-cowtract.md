---
title: 1342.cowtract
categories:
  - JZOJ
  - JZ初中OJ
tags:
  - OJ
---

时间限制: 1000 ms  空间限制: 131072 KB

## 题目描述

  Bessie受雇来到John的农场帮他们建立internet网络。农场有 N (2<= N <= 1,000)牛棚，编号为1..N。John之前已经勘测过，发现有 M (1<= M <= 20,000)条可能的连接线路，一条线路是连接某两个牛棚的。每条可能的线路都有一个建设费用 C (1<= C <=100,000)。John当然想花尽量少的钱，甚至克扣Bessie的工钱。

  Bessie发现了这点，很生气，决定给John捣乱。她要选择一些线路组成网，但费用却尽可能大。当然网络要能正常工作，也就是任意两个牛棚之间都是相互可以连通的，并且网络上不能有环，不然John会很容易发现的。

 请计算组建这种网络最多可能的费用。



## 输入

第一行：两个整数 N M

下面M行：每行3个整数 A，B，C。表示一个可能的线路要连接A、B两个牛棚，费用是C。

## 输出

只一行，一个整数，即花费最大的费用。如果不可能连接通所有牛棚，输出-1。

## 样例输入

 

## 样例输出

 

## 数据范围限制

 

## 提示

| 输入 | 5 8  1 2 3  1 3 7  2 3 10         2 4 4  2 5 8  3 4 6  3 5 2  4 5 17 | 17 + 8 + 10 + 7 = 42 |
| ---- | ------------------------------------------------------------ | -------------------- |
| 输出 | 42                                                           |                      |

## 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int n,m,ans,ans1,fa[20001],flag;
struct cow{
    int father,son,cost;
}tree[20001];
bool cmp(cow x,cow y)
{
    return x.cost>y.cost;
}
int find(int x)
{
    if(fa[x]==x)
    return x;
    else
    return fa[x]=find(fa[x]);
}
void add(int x,int y)
{
    fa[fa[x]]=fa[y];
}
int main()
{
    cin>>n>>m;
    for(int i=1;i<=n;i++)
    fa[i]=i;
    for(int i=1;i<=m;i++)
    {
        cin>>tree[i].father>>tree[i].son>>tree[i].cost;
    }
    sort(tree+1,tree+1+m,cmp);
    for(int i=1;i<=m;i++)
    {
        if(find(tree[i].father)!=find(tree[i].son))
        {   
            ans1++;
            add(tree[i].father,tree[i].son);
            ans+=tree[i].cost;
        }    
    }
    if(ans1==n-1)
    {
        cout<<ans;
        return 0;
    }
    else
    cout<<-1;
    return 0;
}
```

