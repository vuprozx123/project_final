#include <iostream>
#include<cmath>
using namespace std;

class ManagementExpense {
private:
    static const int n = 12;
    long double expenses[n];
    long double m;

public:
    void InputExpenses() {
        for (int i = 0; i < n; ++i) {
            cout << "Nhap so tien chi tieu thang " << (i + 1) << ": "; cin >> expenses[i];
        }
    }

    double SumExpense(){
        double totalExpenses = 0;
        for (int i = 0; i < n; ++i) {
            totalExpenses += expenses[i];
        }
        return totalExpenses;
    }
    
    
    void LimitMoney() {
    	cout<<"Nhap gioi han so tien trong nam nay: "; cin>>m;
	}

    void DisplayExpense() {
        long double totalExpenses = SumExpense();
		cout << "Tong chi tieu trong nam la: " << totalExpenses << endl;
		cout<<"NHAN XET CHI TIEU NAM VUA QUA CUA BAN"<<endl;
		cout<<"=========================================="<<endl;
		if (totalExpenses < m) {
            cout << "Ban da quan ly tai chinh kha tot." << endl;
	  	} 
		else if(totalExpenses == m ) {
	            cout << "Ban can quan ly tai chinh tot suyt vuot qua gioi han cho phep roi" << endl;
	    } 
		else{
	        cout << "Ban da vuot qua gioi han chi tieu, can cat giam chi tieu hop ly" << endl;
	   	}
    }
};

int main() {
    ManagementExpense k;
    cout<<"NHAP SO TIEN TUNG THANG"<<endl;
    cout<<"==========================="<<endl;
    k.InputExpenses();
    k.LimitMoney();
    k.DisplayExpense();

    return 0;
}
