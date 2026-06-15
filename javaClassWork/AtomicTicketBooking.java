package javaClassWork;

public class AtomicTicketBooking {
    public static void main(String[] args) {
        //use lock free alternatives to synchronized
        //recreate a flight seat booking system where 100 users are trying to book the last 10 seats simultaneously. instead of using synchronized. students must yse java atomicInteger or AtomixBoolean to ensure that no duplicate seats are assigned and the program never oversells 
        //java.util.concurrent.atomic, lock-free programming Compare-And-Swap (CAS) operations, atomic variables, high performance concurrent applications
        TicketBookingSystem bookingSystem = new TicketBookingSystem(10); // 10 tickets available

        Thread t1 = new Thread(() -> bookingSystem.bookTicket(), "Thread1");
        Thread t2 = new Thread(() -> bookingSystem.bookTicket(), "Thread2");
        Thread t3 = new Thread(() -> bookingSystem.bookTicket(), "Thread3");

        t1.start();
        t2.start();
        t3.start();
    }
}

class TicketBookingSystem {
    private java.util.concurrent.atomic.AtomicInteger availableTickets;

    public TicketBookingSystem(int totalTickets) {
        this.availableTickets = new java.util.concurrent.atomic.AtomicInteger(totalTickets);
    }

    public void bookTicket() {
        while (true) {
            int currentTickets = availableTickets.get();
            if (currentTickets > 0) {
                if (availableTickets.compareAndSet(currentTickets, currentTickets - 1)) {
                    System.out.println(Thread.currentThread().getName() + " booked a ticket. Tickets left: " + (currentTickets - 1));
                    break;
                }
            } else {
                System.out.println("No tickets available for " + Thread.currentThread().getName());
                break;
            }
        }
    }
}
