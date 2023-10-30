package com.sff.userserver.domain.member.service;

import com.sff.userserver.domain.member.dto.MemberInfoResponse;
import com.sff.userserver.domain.member.dto.SignupRequest;

public interface MemberService {
    void signUp(SignupRequest signupRequest);

    void deleteMember(Long memberId);

    MemberInfoResponse getMember(Long memberId);
}
