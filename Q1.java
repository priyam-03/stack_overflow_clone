import java.util.*;
class Customer{
    int cust_id;
    String cust_name;
    double cur_loan;
    double CREDIT_AMT=10000;
    boolean isValued;
    long ph_no;

    

    


    public void setDetails(){
        Scanner myobj= new Scanner(System.in);
        int cid; String cname; double cloan; Long pn; boolean isValued;

        System.out.println("Enter name: ");
        cname= myobj.nextLine();
        System.out.println("Enter customer id: ");
        cid= myobj.nextInt();
        System.out.println("Enter the phone number: ");
        pn= myobj.nextLong();
        System.out.println("Enter loan amount already taken: ");
        cloan= myobj.nextDouble();
        System.out.println("Enter valued member status: ");
        isValued= myobj.nextBoolean();
        

        cust_id= cid;
        cust_name= cname;
        cur_loan= cloan;
        if(isValued){
            CREDIT_AMT= 20000;
        }
        this.isValued= isValued;
        ph_no= pn;
        
    }

    public void setCreditLimit(){
        Scanner myobj= new Scanner(System.in);
        System.out.println("Enter the new Credit limit: ");
        double new_cred= myobj.nextDouble(); 
        
        CREDIT_AMT= new_cred;
    }

    public void getLoan(){
        Scanner myobj= new Scanner(System.in);
        double amt;
        System.out.println("Enter requested amount: ");
        amt= myobj.nextDouble();

        if(amt +cur_loan> CREDIT_AMT){
            System.out.println("Credit limit reached. Cannot process loan request.");

        }
        cur_loan+=amt;

        System.out.println("Loan request accepted.");

    }

    

    public void display_details(){
        System.out.println("Customer Id: "+ cust_id);
        System.out.println("Customer name: "+ cust_name);
        System.out.println("Current loan amount: "+ cur_loan);
        System.out.println("Loan that can be taken: "+ (CREDIT_AMT- cur_loan));
        System.out.println("Credit limit: "+ CREDIT_AMT);
        System.out.println("Valued member status: "+isValued);
        System.out.println("Phone number: "+ ph_no);
    }
}

public class Q1{
    public static void main(String[] args){
        Customer c= new Customer();
        c.setDetails();
        c.getLoan();

        c.display_details();

    }
}