package deployment;

public class ReplyFinance {
	private String messageName;
	private String p_msg;
	private String p_state;
	public ReplyFinance(String messageName, String p_msg, String p_state) {
		
		this.messageName = messageName;
		this.p_msg = p_msg;
		this.p_state = p_state;
	}
	public String getP_msg() {
		return p_msg;
	}
	public void setP_msg(String p_msg) {
		this.p_msg = p_msg;
	}
	public String getP_state() {
		return p_state;
	}
	public void setP_state(String p_state) {
		this.p_state = p_state;
	}
	public String getMessageName() {
		return messageName;
	}
	public void setMessageName(String messageName) {
		this.messageName = messageName;
	}

}
