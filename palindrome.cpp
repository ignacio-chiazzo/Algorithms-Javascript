#include<iostream>

using namespace std;
  
  void case1(int x)
     {     x=121;
         cout<<"for positive integers : "<<x<<endl;
     }
  void case2(int x)
     {    x=-121;
         cout<<"for negative integers : "<<x<<endl;
     }
  void case3(int x)
     {   x=10;
         cout<<"for integers end with zero: "<<x<<endl;
     }

    bool isPalindrome(int x) {
       if(x < 0)
        {
            return false;
        }
    long  n = x;
    long  Num = 0, rem;
      while(x != 0)
    {
        rem = x%10;
        Num = (Num*10)+rem;
        x /= 10;
    }
    
    if(Num == n)
    {
        return true;
    }
     return false;
}

    int main()
    {    
       int x,c,n;
       case1(x);
        // cout<<isPalindrome(x);
       if(c==0)
       {cout<<"false"<<endl;}
       else{cout<<"true"<<endl;}
       case2(x);
        c=isPalindrome(x);
       if(c==0)
       {cout<<"false"<<endl;}
       else{cout<<"true"<<endl;}
       case3(x);
        c=isPalindrome(x);
       if(c==0)
       {cout<<"false"<<endl;}
       else{cout<<"true"<<endl;}
        return 0;
    }
