---
title: '3423.Vani和Cl2捉迷藏'
categories: 
  - JZOJ
  - JZ高中OJ
tags:
	- OJ
---

Time Limits: 1000 ms  Memory Limits: 262144 KB

## Description

vani和cl2在一片树林里捉迷藏……

这片树林里有N座房子，M条有向道路，组成了一张有向无环图。

树林里的树非常茂密，足以遮挡视线，但是沿着道路望去，却是视野开阔。如果从房子A沿着路走下去能够到达B，那么在A和B里的人是能够相互望见的。

现在cl2要在这N座房子里选择K座作为藏身点，同时vani也专挑cl2作为藏身点的房子进去寻找，为了避免被vani看见，cl2要求这K个藏身点的任意两个之间都没有路径相连。

为了让vani更难找到自己，cl2想知道最多能选出多少个藏身点？



## Input

第一行两个整数N，M。

接下来M行每行两个整数x、y，表示一条从x到y的有向道路。

## Output

一个整数K，表示最多能选取的藏身点个数。

## Sample Input

```
4 4
1 2
3 2
3 4
4 2
```

## Sample Output

```
2
```

## Data Constraint

对于20% 的数据，N≤10，M<=20。

对于60% 的数据, N≤100，M<=1000。

对于100% 的数据，N≤200，M<=30000，1<=x,y<=N。

## Code

```cpp
#include<iostream>
#include<cstdio>
#include<cstring>
#define maxn 210
using namespace std;
int n,m,g[maxn][maxn],ans,match[maxn];
bool f[maxn];
int Dfs(int s)
{
    for(int i=1;i<=n;i++)
      if(f[i]==0&&g[s][i]==1)
        {
          f[i]=1;
          if(match[i]==0||Dfs(match[i]))
            {
              match[i]=s;
              return 1;
            }
        }
    return 0;
}
int main()
{
    scanf("%d%d",&n,&m);
    int x,y;ans=n;
    for(int i=1;i<=m;i++)
      {
          scanf("%d%d",&x,&y);
          g[x][y]=1;
      }
    for(int k=1;k<=n;k++)
      for(int i=1;i<=n;i++)
        for(int j=1;j<=n;j++)
          g[i][j]=g[i][j]||(g[i][k]&&g[k][j]);
    for(int i=1;i<=n;i++)
      {
          memset(f,0,sizeof(f));
          ans-=Dfs(i);
      }
    printf("%d\n",ans);
    return 0;
}
```

